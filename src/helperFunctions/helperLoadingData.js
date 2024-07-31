function helperLoadingTrainingsdata({ programId, workoutId, day, style }) {
  const params = useParams();
  const location = useLocation();

  const filteredId = params.id;

  const { loading, error, data } = useQuery(GET_WORKOUT, {
    variables: { id: filteredId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { workout } = data;
  const url = decodeURIComponent(location.pathname + location.search);

  const pathSegments = location.pathname.split("/");
  const programId = pathSegments[pathSegments.length - 1];

  const queryParams = new URLSearchParams(location.search);

  const workoutId = queryParams.get("workoutId");
  const day = queryParams.get("day");
  const style = queryParams.get("style") || "";
}
