import {
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl,
  FaUnderline,
} from "react-icons/fa";

export default function Icon({ icon }: { icon: string }) {
  switch (icon) {
    case "format_bold":
      return <FaBold />;
    case "format_italic":
      return <FaItalic />;
    case "format_underline":
      return <FaUnderline />;
    case "format_list_numbered":
      return <FaListOl />;
    case "format_list_bulleted":
      return <FaListUl />;
    default:
      return null;
  }
}
