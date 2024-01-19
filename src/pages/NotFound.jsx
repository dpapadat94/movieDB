import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, autem
        adipisci sint modi itaque veritatis sit sed officiis unde dolore. Ea
        blanditiis illum iste mollitia reprehenderit minus harum temporibus
        nobis
      </p>
      <Link to="/">HomePage</Link>
    </div>
  );
}

export default NotFound;
