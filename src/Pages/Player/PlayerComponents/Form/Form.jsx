import { setName, setSeason } from "../../../../Redux/Slices/PlayerSlice"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
export const Form = () => {
    const dispatch = useDispatch()
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data) => {
        dispatch(setName(data.playerName))
        dispatch(setSeason(data.playerSeason))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Enter the player's name:
                <input
                    placeholder="e.g. Lebron James"
                    {...register("playerName", {
                        required: 'Please, enter the name of the player',
                    })}
                />
            </label>
            <div>{errors?.playerName && <p>{errors?.playerName?.message || "Something went wrong!"}</p>}</div>
            <label>Specify the season:
                <input
                    placeholder="e.g. 2021"
                    type='number'
                    {...register("playerSeason", {
                        required: 'Please, enter the season year',
                    })}
                />
            </label>
            <div>{errors?.playerSeason && <p>{errors?.playerSeason?.message || "Something went wrong!"}</p>}</div>
            <button type='submit' disabled={!isValid}>Search</button>
        </form>
    )
}

export default Form