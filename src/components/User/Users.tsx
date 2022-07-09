import { Button } from "@mui/material"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { deleteUser } from "../../redux/actions/appActions"
import './User.css'

type UserCartPropType = {
  name: string
  surname: string
  descr: string
  id: number
}

export const UserCard: FC<UserCartPropType> = ({ name, surname, descr, id }) => {

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card_block">
        <div>
          <span><b>Name:</b> {name}</span>
        </div>
        <div>
          <span><b>Surname:</b> {surname ? surname : 'Not Found'}</span>
        </div>
        <div>
          <span>
            <b>Description:</b> {descr ? descr : 'Not Found'}
          </span>
        </div>
      </div>
      <div className="card_btn">
        <Button variant="outlined" style={{ marginRight: '10px' }}>Edit</Button>
        <Button variant="contained" onClick={() => dispatch(deleteUser(id))}>Delete</Button>
      </div>
    </div>
  )
}