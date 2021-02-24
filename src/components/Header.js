//Importing Props Types
import PropTypes from 'prop-types'

//Props Usage with props keyword
// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }


// Props usage without props keyword
const Header = ({title}) => {
    return (
        <header className="my-header">
            <h1>{title}</h1>
        </header>
    )
}

// Default Props Value, will be used if no props value passed
Header.defaultProps = {
    title: 'Hello World App.',
}

// Declaring props data type and making it required
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
