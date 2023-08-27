import materialIcons from './IconSwitch.module.css';


const IconSwitch = (props) => {
    const { icon, onSwitch } = props;

    if (icon === 'view_list') {
        return (
            <button onClick={onSwitch}>
                <span class="material-icons">
                    view_list
                </span>
            </button>
        );
    } else {
        return (
            <button onClick={onSwitch}>
                <span class="material-icons">
                    view_module
                </span>
            </button>
        );
    }
};

export default IconSwitch;