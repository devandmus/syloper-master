import * as React from 'react';
import { useTheme } from 'styled-components';
import ServicesResponsible from '../../../../../services/ServicesResponsible';
import Dropdown from '../AvatarSelector/styles';

const ProfileSelector = ({ selected, handleSaveProfile }) => {
  const [dropdown, setDropdown] = React.useState(false);

  const theme = useTheme();
  const [responsibles, setResponsibles] = React.useState([]);

  React.useEffect(() => {
    ServicesResponsible.getResponsibles().then((data) => setResponsibles(data));
  }, []);

  const handleChange = () => {
    setDropdown(!dropdown);
  };

  const openDropdown = () => {
    setDropdown(true);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  const handleCompOnSave = (responsible) => {
    handleSaveProfile(responsible);
  };

  return (
    <Dropdown
      className="dropdown"
      onMouseOver={handleChange}
      onMouseOut={closeDropdown}
    >
      <button className="dropbtn">
        {' '}
        <div style={{ fontFamily: theme.font.family }}>{selected.type}</div>
      </button>

      <div
        className="dropdown-content"
        onMouseOver={openDropdown}
        style={{
          display: dropdown ? 'block' : 'none',
          top: '45%',
        }}
      >
        {responsibles
          .filter((responsible) => responsible.id !== selected.id)
          .map((responsible) => (
            <a
              href="#"
              style={{ fontFamily: theme.font.family }}
              onClick={() => handleCompOnSave(responsible)}
            >
              {' '}
              {responsible.type}
            </a>
          ))}
      </div>
    </Dropdown>
  );
};

export default ProfileSelector;
