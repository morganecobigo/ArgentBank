import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/userActions";

function Form(props) {
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { onClose, onSubmit } = props;
  // États pour stocker les valeurs des champs
  const [userName, setUserName] = useState(user?.userName);
  // Fonction pour gérer les changements dans les champs d'entrée
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { userName };
    updateUser(token, body, onClose, dispatch);
  };

  return (
    <div>
      <h2>Edit user info</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Formulaire pour capturer la soumission */}
        <div className="form">
          <div className="name">
            <label className="form-name" htmlFor="username">
              User name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div className="name">
            <label className="form-name" htmlFor="firstname">
              First name:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={user.firstName}
              disabled
            />
          </div>
          <div className="name">
            <label className="form-name" htmlFor="lastname">
              Last name:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={user.lastName}
              disabled
            />
          </div>
        </div>
        <button className="form-button" type="submit" onClick={onSubmit}>
          Save
        </button>
        <button className="form-button" type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
export default Form;
