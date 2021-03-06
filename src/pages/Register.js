import React from 'react'
import SubHeader from '../components/SubHeader/SubHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import useForm from '../useForm'
import Message from '../components/Message/Message'

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const Register = () => {
  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const history = useHistory()

  const { values, handleChange, handleSubmit } = useForm(INITIAL_STATE, submit)

  function submit() {
    const { firstName, lastName, email, password } = values
    dispatch(
      register(firstName, lastName, email, password, () =>
        history.push('/register/success')
      )
    )
  }

  return (
    <>
      <SubHeader title='Register' text='' />
      <section className='container'>
        <div className='login__form'>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='username'>FIRST NAME</label>
              <input
                type='text'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='username'>LAST NAME</label>
              <input
                type='text'
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>EMAIL</label>
              <input
                type='text'
                name='email'
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control' style={{ marginBottom: '0.5rem' }}>
              <label htmlFor='password'>PASSWORD</label>
              <input
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control' style={{ marginBottom: '0.5rem' }}>
              <label htmlFor='password'>CONFIRM PASSWORD</label>
              <input
                type='password'
                name='confirmPassword'
                value={values.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button className='btn btn--primary' to='/dashboard'>
              Register
            </button>
            {loading && (
              <div class='fa-1x'>
                <i class='fas fa-sync fa-spin'></i>
              </div>
            )}

            {error && <Message type='message message-danger'>{error}</Message>}
          </form>
          <p>Already have an account? </p>
          <Link to='/login'>Login</Link>
        </div>
      </section>
    </>
  )
}

export default Register
