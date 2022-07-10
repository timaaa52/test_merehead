import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../redux/actions/appActions'
import './CreateUser.css'

type userDataType = {
  FirstName: string
  SurName: string
  Description: string
}

export const UserCreateForm = () => {

  const {
    register, handleSubmit, formState: { errors }, reset
  } = useForm<userDataType>()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit: SubmitHandler<userDataType> = (data) => {
    dispatch(createUser(data.FirstName, data.SurName, data.Description))
    reset()
    navigate('/users')
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        {...register('FirstName', {
          required: 'Required!'
        })}
        placeholder='Name'
      />
      <div>
        {errors?.FirstName && <p>'This field is required'</p>}
      </div>

      <input
        {...register('SurName', {
          required: 'Required!'
        })}
        placeholder='Surname'
      />
      <div>
        {errors?.SurName && <p>'This field is required'</p>}
      </div>
      <input
        {...register('Description', {
          required: 'Required!'
        })}
        placeholder='Description'
      />
      <div>
        {errors?.Description && <p>'This field is required'</p>}
      </div>
      <input type="submit" value={'Submit'} />
    </form>
  );
}