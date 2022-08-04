//loading spinner indicator CSS keyframes handles the loading effect
export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}