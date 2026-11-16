const Crumb = () => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Events</a>
        </li>
        <li>
          <li>{event?.title}</li>
        </li>
      </ul>
    </div>
  );
};

export default Crumb;
