import { headers } from "next/headers";
import React from "react";

function page() {
  const headerRequest: any = headers();
  const user = JSON.parse(headerRequest.get("user"));
  return (
    <div>
      Manage Blog
      <br />
      {user.id}
    </div>
  );
}

export default page;
