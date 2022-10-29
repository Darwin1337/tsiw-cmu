export default function Film(props) {
  return (
    <>
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{ props.content.title }</h5>
        <p className="mb-3 font-normal text-gray-700">{ props.content.opening_crawl }</p>
        <div className="mb-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300">
          Episode { props.content.episode_id }
        </div>
        <div className="py-2 px-3 text-sm font-medium text-center text-white bg-orange-700 rounded-md focus:ring-4 focus:outline-none focus:ring-orange-300">
          Released { new Date(props.content.release_date).toLocaleDateString("en-US",  { year: 'numeric', month: 'long', day: 'numeric' }) }
        </div>
      </div>
    </>
  )
}
