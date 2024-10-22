import React, { useState } from "react";

import Account from "../../components/account/Account";
import Form from "../../components/form/Form";
import { accountsList } from "./accountsList";

function User() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        {showForm ? (
          <Form onClose={() => setShowForm(false)} />
        ) : (
          <button className="edit-button" onClick={() => setShowForm(true)}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountsList.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </div>
  );
}
export default User;
