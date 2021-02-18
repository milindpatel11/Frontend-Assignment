import '../css/Groups.css';
import collapse from '../icons/collapse.svg'
import {useState} from 'react';


function GroupItem (props) {

  const children = props.data.filter(item => (item.parent && item.parent.split("/")[item.parent.split("/").length-2] === props.item.id));
  const has_children = children.length > 0;
  const [groupitemexpand, setGroupItemExpand] = useState(false)

  return (
    <>
      <div className={`group-item group-item-indent-${props.indent} flex-row`}
        style={{backgroundColor: (props.activegroup === props.item.name) && "rgb(235,235,235)"}}
        onClick={()=>props.changeActiveGroup(props.item.name)} >

          <div className={`group-item-square item-square-${props.indent}`}>
            {props.indent}
          </div>

          {has_children ?
            <img className={groupitemexpand ? "item-expand-rotate" : "item-expand"}
            src={collapse} onClick={()=>setGroupItemExpand(!groupitemexpand)}/> :
            <h2>  •   </h2>
          }

          <div className="flex-column group-description">
            <h5> {props.item.name} </h5>
            <h6> {props.item.path} </h6>
          </div>

      </div>


      <div className="flex-column group-item-children">
        { groupitemexpand &&
          children.map( (item) =>
            <GroupItem data={props.data} item={item}
              indent={props.indent+1} expand={groupitemexpand}
              changeActiveGroup={props.changeActiveGroup}
              activegroup={props.activegroup} key={item.id}/>
          )
        }
      </div>
    </>
  )
}


function Groups(props) {

  const data = props.groupsdata;

  return (
    <>
      <GroupItem data={data} item={data.filter(item => (item.path === "All devices"))[0]}
        indent={0} expand={true} activegroup={props.activegroup}
        changeActiveGroup={props.changeActiveGroup}/>
    </>

  );
}

export default Groups;
