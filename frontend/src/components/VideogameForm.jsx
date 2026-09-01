
function VideoGameForm({
    title,
    setTitle,
    console, 
    setConsole,
    played, 
    setPlayed,
    rating, 
    setRating,
    handleSubmit,
    buttonText,
    loading
}) {
    return(
        <form onSubmit={handleSubmit} className="game-form">
            <div className="form-group">
                <label>Title:</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Console:</label>
                <input
                type="text"
                value={console}
                onChange={(e) => setConsole(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Played:</label>
                <select
                value={played.toString()}
                onChange={(e) => setPlayed(e.target.value)}
                >
                <option value="true">Yes</option>
                <option value="false">No</option>
                </select>
            </div>

            <div className="form-group">
                <label>Rating:</label>
                <input
                type="number"
                min="0"
                max="10"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                />
            </div>

            <button 
            className="formButton"
            type="submit"
            disabled={loading}
            >{loading ? "Creating..." : buttonText}</button>
        </form>
    )
}

export default VideoGameForm