import React from "react";
import DefaultProfileImg from "../images/yukino.jpg";

const UserAside = ({ profilePictureUrl, userName }) => (
  <aside className="col-sm-2">
    <div className="panel panel-default">
      <div className="panel-body">
        <img
          src={profilePictureUrl || DefaultProfileImg}
          alt={userName}
          width="200"
          height="200"
          className="img-thumbnail"
        />
      </div>
    </div>
  </aside>
);

export default UserAside;