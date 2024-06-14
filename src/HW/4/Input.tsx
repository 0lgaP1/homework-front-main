import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (text: string) => void //НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input: React.FC<InputPropsType> = ({currentText, setCurrentText}) => {
	const onChangeHandler =
		(event: ChangeEvent<HTMLInputElement>) => {setCurrentText(event.currentTarget.value);
	};

	return (
		<input id={'hw04-input'}
			   type="text"
			   value={currentText}
			   onChange={onChangeHandler}/>
	)
};