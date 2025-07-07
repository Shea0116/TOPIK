import './styles/Footer.scss'

const Footer = () => {
  const year = (new Date()).getFullYear()
  return (
    <div id='Footer'>
      <p>Copyright © {year} <a href='https://github.com/Shea0116' alt='' target='blank'>Shea.</a> All Rights Reserved.</p>
    </div>
  )
}

export default Footer
