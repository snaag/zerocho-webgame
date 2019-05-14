const React = require('react');

const NumberBaseball = () => {
    const [text, setText] = React.useState('this is text');

    return (
        <div>
            {text}
        </div>
    );
};

module.exports = NumberBaseball;