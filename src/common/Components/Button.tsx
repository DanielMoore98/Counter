type propsType = {
    name: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({name, onClick, disabled}: propsType) => {
    return (
        <button className={"button"}
                onClick={onClick}
                disabled={disabled}
        >{name}</button>
    );
};

