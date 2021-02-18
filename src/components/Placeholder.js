import '../css/Placeholder.css';


function Placeholder(props) {

  return (
    <>
      <div className="console-content-top flex-row">
         <p className={!props.top ? "hidden" : undefined}>Switch to the new Dashboard experience! </p>
      </div>
      <div className="console-content-bottom">
         <div className="placeholder-content">
            <p> {props.title} Content Here </p>
         </div>
      </div>
    </>

  );
}

export default Placeholder;
