export default function VirtualTourPage() {
  return (
    <div className="h-screen w-full">
      <iframe
        src="https://virtualtour.elbasani.gov.al/"
        className="w-full h-full border-0"
        title="Virtual Tour i Elbasanit"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
