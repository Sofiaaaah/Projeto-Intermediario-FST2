export default function Input(props) {
  return (
    <input id={props.id} type={props.type} placeholder={props.placeholder} className={props.className}/>
  );
}
