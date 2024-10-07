import React from "react";

const NewsItem = (props) => {
  // Destructure props
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {!source ? "News" : source}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://gizmodo.com/app/uploads/2024/09/Samsung-Galaxy-Tab-S10-2-680x453.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
