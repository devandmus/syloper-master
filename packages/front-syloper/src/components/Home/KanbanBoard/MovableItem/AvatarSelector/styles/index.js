import styled from 'styled-components';

const Dropdown = styled.div`
  .dropbtn {
    padding: 10px;
    font-size: 16px;
    border: none;
    background-color: #fff;
    font-weight: 400;
  }
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    z-index: 1;
    border-radius: 13px;
    min-width: 68px;
    right: 10px;
    height: 200px;
    overflow-y: scroll;

    @media screen and (max-width: 1600px) {
      left: 10px;
    }
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 13px;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

export default Dropdown;
