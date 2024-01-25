// this component is for receiving suggestions from the server and displaying them to the user.
//the user then can select which suggestion to implement in the code, and it'll update the current code, or ignore the suggestion


import PropTypes from 'prop-types';
const SuggestionsList = ({ suggestions, acceptSuggestion, ignoreSuggestion }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Suggestion</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {suggestions.map((suggestion, index) => (
                    <tr key={index}>
                        <td>{suggestion}</td>
                        <td>
                            <button onClick={() => acceptSuggestion(suggestion)}>Accept</button>
                            <button onClick={() => ignoreSuggestion(suggestion)}>Ignore</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
SuggestionsList.propTypes = {
    suggestions: PropTypes.array.isRequired,
    acceptSuggestion: PropTypes.func.isRequired,
    ignoreSuggestion: PropTypes.func.isRequired
};

export default SuggestionsList;
