import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcon } from "./data";

const Social = () => {
  return (
    <div style={{ backgroundColor: "#ddd" }}>
      {socialIcon.map((social) => {
        return (
          <a href="https://facebook.com">
            {" "}
            <FontAwesomeIcon icon={social.icon} size="3x" style={{ color: social.color, margin: "10px" }} />
            <span>{social.tooltip}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Social;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { socialIcon } from "./data"; // data ফাইল থেকে ইম্পোর্ট

// const Social = () => {
//   return (
//     <div>
//       {socialIcon.map((social) => (
//         <FontAwesomeIcon icon={social.icon} size="2x" />
//       ))}
//     </div>
//   );
// };

// export default Social;
