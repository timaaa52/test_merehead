import { Container, Pagination } from "@mui/material"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/appActions";
import { rootReducerType } from "../../redux/reducers";
import { user } from "../../redux/reducers/appReduce";
import { UserCard } from "../User/Users";
import './UserContainer.css'


export const UserContainer = () => {

  const users = useSelector<rootReducerType, user[]>(state => state.app.users)
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const changePage = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const slicedUsers = (page: number) => {
    let count = page * 5
    return users.slice(count - 5, count).map((el: user) => {
      return <UserCard key={el._id} name={el.name} surname={el.surname} descr={el.desc} id={el.user_id} />
    })
  }

  return (
    <div>
      <Container>
        {/* <button
          onClick={() => dispatch(getUsers())}
        >
          Get Users
        </button>
        <button
          onClick={() => dispatch(deleteUser(383))}
        >Delete</button>
        <button
          onClick={() => dispatch(updateUser(384, 'Jackkk', 'Vorobei', 'Hello world'))}
        >Update</button> */}
        <div className='users_block'>
          {
            users && slicedUsers(page)
          }
        </div>
        <div className='pagination'>
          <Pagination count={Math.ceil(users.length / 5)}
            onChange={changePage}
            page={page} variant="outlined"
            shape="rounded"
          />
        </div>
      </Container>
    </div>
  )

}