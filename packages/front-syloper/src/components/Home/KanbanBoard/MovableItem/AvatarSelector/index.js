import * as React from 'react';
import ServicesUser from '../../../../../services/ServicesUser';
import Avatar from '../avatar';
import Dropdown from './styles';

const AvatarSelector = ({ responsible, handleSaveAvatar }) => {
  const [dropdown, setDropdown] = React.useState(false);
  const [responsibles, setResponsibles] = React.useState([]);

  React.useEffect(() => {
    ServicesUser.getUsers().then((data) => setResponsibles(data));
  }, []);

  const handleChange = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const handleCompOnSave = (item) => {
    handleSaveAvatar(item);
  };

  return (
    <Dropdown
      className="dropdown"
      onMouseOver={handleChange}
      onMouseOut={closeDropdown}
    >
      <button className="dropbtn">
        {' '}
        <Avatar responsible={responsible} />{' '}
      </button>
      <div
        className="dropdown-content"
        style={{ display: dropdown ? 'block' : 'none', bottom: '75px' }}
      >
        {responsibles
          .filter((item) => item.id !== responsible.id)
          .map((item) => (
            <a href="#" onClick={() => handleCompOnSave(item)}>
              <Avatar responsible={item} />
            </a>
          ))}
      </div>
    </Dropdown>
  );
};

export default AvatarSelector;
