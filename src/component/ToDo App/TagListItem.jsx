const TagListItem = ({ tag }) => (
  <li key={tag.id}>
    <small>{tag.icon}</small> {tag.text}
  </li>
);
export default TagListItem;
