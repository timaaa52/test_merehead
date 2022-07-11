import { Button, Input } from "@mui/material"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteUser, updateUser } from "../../redux/actions/appActions"
import './User.css'

type UserCartPropType = {
  name: string
  surname: string
  descr: string
  id: number
}

export const UserCard: FC<UserCartPropType> = ({ name, surname, descr, id }) => {

  const [inputName, setName] = useState<string>(name)
  const [inputSurname, setSurName] = useState<string>(surname)
  const [inputDescr, setDescription] = useState<string>(descr)
  const [editMode, setEditMode] = useState(false)

  const dispatch = useDispatch();

  const field = (title: string, changeValue: React.Dispatch<React.SetStateAction<string>>) => {
    return editMode ? <Input value={title} onChange={(e) => changeValue(e.target.value)} style={{ marginLeft: '5px', height: '35px', marginBottom: '5px' }} size={"small"} /> : <span>{title}</span>
  }

  const changeEditMode = () => {
    setEditMode(!editMode)
    editMode && dispatch(updateUser(id, inputName, inputSurname, inputDescr))
  }

  return (
    <div className="card">
      <div className="card_block">
        <div>
          <span><b>Name:</b>{field(inputName, setName)}</span>
        </div>
        <div>
          <span><b>Surname:</b>{field(inputSurname, setSurName)}</span>
        </div>
        <div>
          <span>
            <b>Description:</b>{field(inputDescr, setDescription)}
          </span>
        </div>
      </div>
      <div className="card_btn">
        <Button variant="outlined" style={{ marginRight: '10px' }} onClick={() => changeEditMode()}>Edit</Button>
        <Button variant="contained" onClick={() => dispatch(deleteUser(id))}>Delete</Button>
      </div>
    </div>
  )
}