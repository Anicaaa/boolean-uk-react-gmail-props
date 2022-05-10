import Email from "./email.js";

function Emails(props) {
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          index={index}
          email={email}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
        />
      ))}
    </ul>
  );
}

export default Emails;
