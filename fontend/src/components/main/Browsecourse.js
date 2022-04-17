import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";

import "../../stylesheet/BrowseCourse.css";

export default function BrowseCourse() {
  const url = app_config.api_url;

  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchCourses = () => {
    fetch(url + "/course/getall")
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setLoading(false);
        setCourseList(data);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const displayCourses = () => {
    return courseList.map(
      ({
        _id,
        title,
        category,
        createdAt,
        description,
        data,
        price,
        reviews,
        thumbnail,
        trainer,
      }) => (
        <div
          class="book-card"
          onClick={(e) => {
            navigate("/main/viewcourse/" + _id);
          }}
        >
          <div class="content-wrapper">
            <img
              src={url + "/uploads/" + thumbnail}
              alt={title}
              class="book-card-img"
            />
            <div class="card-content">
              <div class="book-name">{title}</div>
              <div class="book-by">by {trainer.fullname}</div>
              <div class="rate">
                <fieldset class="rating book-rate">
                  <input type="checkbox" id="star-c1" name="rating" value="5" />
                  <label class="full" for="star-c1"></label>
                  <input type="checkbox" id="star-c2" name="rating" value="4" />
                  <label class="full" for="star-c2"></label>
                  <input type="checkbox" id="star-c3" name="rating" value="3" />
                  <label class="full" for="star-c3"></label>
                  <input type="checkbox" id="star-c4" name="rating" value="2" />
                  <label class="full" for="star-c4"></label>
                  <input type="checkbox" id="star-c5" name="rating" value="1" />
                  <label class="full" for="star-c5"></label>
                </fieldset>
                <span class="book-voters card-vote">
                  {reviews.length} reviews
                </span>
              </div>
              <div class="book-sum card-sum">{description}</div>
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <div>
      <div class="book-store">
        <div class="header">
          <div class="browse">
            <div class="browse-category">
              Browse Category
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div class="search-bar">
              <input type="text" placeholder="Search Book" />
            </div>
          </div>
          <div class="header-title">
            read<span>books</span>
          </div>
          <div class="profile">
            <div class="user-profile">
              <img
                src="https://randomuser.me/api/portraits/women/63.jpg"
                alt=""
                class="user-img"
              />
            </div>
            <div class="profile-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              Menu
            </div>
          </div>
        </div>
        <div class="main-wrapper">
          <div class="books-of">
            <div class="week">
              <div class="author-title">Author of the week</div>
              <div class="author">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                  alt=""
                  class="author-img"
                />
                <div class="author-name">Sebastian Jeremy</div>
              </div>
              <div class="author">
                <img
                  src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                  class="author-img"
                />
                <div class="author-name">Jonathan Doe</div>
              </div>
              <div class="author">
                <img
                  src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  class="author-img"
                />
                <div class="author-name">Angeline Summer</div>
              </div>
              <div class="author">
                <img
                  src="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg"
                  alt=""
                  class="author-img"
                />
                <div class="author-name">Noah Jones</div>
              </div>
              <div class="author">
                <img
                  src="https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png"
                  alt=""
                  class="author-img"
                />
                <div class="author-name">Tommy Adam</div>
              </div>
              <div class="author">
                <img
                  src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  class="author-img"
                />
                <div class="author-name">Ian Cassandra</div>
              </div>
            </div>
            <div class="week year">
              <div class="author-title">Books of the year</div>
              <div class="year-book">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg"
                  alt=""
                  class="year-book-img"
                />
                <div class="year-book-content">
                  <div class="year-book-name">Disappearing Earth</div>
                  <div class="year-book-author">by Julia Phillips</div>
                </div>
              </div>
              <div class="year-book">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81eI0ExR+VL.jpg"
                  alt=""
                  class="year-book-img"
                />
                <div class="year-book-content">
                  <div class="year-book-name">Lost Children Archive</div>
                  <div class="year-book-author">by Valeria Luiselli</div>
                </div>
              </div>
              <div class="year-book">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81OF9eJDA4L.jpg"
                  alt=""
                  class="year-book-img"
                />
                <div class="year-book-content">
                  <div class="year-book-name">Phantoms: A Thriller </div>
                  <div class="year-book-author">by Dean Koontz</div>
                </div>
              </div>
              <div class="year-book">
                <img
                  src="https://m.media-amazon.com/images/I/515FWPyZ-5L.jpg"
                  alt=""
                  class="year-book-img"
                />
                <div class="year-book-content">
                  <div class="year-book-name">Midnight in Chernobyl</div>
                  <div class="year-book-author">by Adam Higginbotham</div>
                </div>
              </div>
              <div class="year-book">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91dBtgERNUL.jpg"
                  alt=""
                  class="year-book-img"
                />
                <div class="year-book-content">
                  <div class="year-book-name">10 Minutes 38 Seconds</div>
                  <div class="year-book-author">by Elif Shafak</div>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </div>
          <div class="popular-books">
            <div class="main-menu">
              <div class="genre">Popular by Genre</div>
              <div class="book-types">
                <a href="#" class="book-type active">
                  {" "}
                  All Genres
                </a>
                <a href="#" class="book-type">
                  {" "}
                  Business
                </a>
                <a href="#" class="book-type">
                  {" "}
                  Science
                </a>
                <a href="#" class="book-type">
                  {" "}
                  Fiction
                </a>
                <a href="#" class="book-type">
                  {" "}
                  Philosophy
                </a>
                <a href="#" class="book-type">
                  {" "}
                  Biography
                </a>
              </div>
            </div>
            <div class="book-cards">{displayCourses()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
