export const HandleInternalError = ({error}) => {
    console.log(error)
    return (
        <div className="error-page min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-red-600 mb-4">Error!! 🌍</h1>
          <p className="text-2xl text-gray-300 font-semibold">{error?.message}</p>
        </div>
      </div>
    )
}