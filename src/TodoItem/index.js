import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'

function TodoItem(props){
    return(
      <li>
        <div className='selector-TODO-done'>
            {/* <span onClick={props.onComplete}><h1>V</h1></span> */}
            <CompleteIcon 
              completed={props.Completed}
              onComplete={props.onComplete}
            />
          <h4 className={`${props.Completed && 'check-p-completed'}`}>{props.Text}</h4>
        </div>
          <DeleteIcon
            onDelete={props.onDelete}
          />
      </li>
    ); 
  }

export { TodoItem }