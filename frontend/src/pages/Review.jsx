import React, { useEffect, useState } from 'react'
import { Star } from "lucide-react"
import axios from 'axios'

function Review() {






  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (rating === 0) {
  alert("Please select a rating")
  return
}

 try{

   const dataSend = axios.post(import.meta.env.VITE_REVIEWDATA_API+'businessr/postbreview',
     {
      'uname':name,
      'uemail':Email,
      'urating':rating,
      'ureview':comment,
     },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    console.log("Server response")
    alert("Review submitted successfully ✅")

    setName("")
    setEmail("")
    setComment("")
    setRating(0)

  } catch (error) {
    console.error("Error submitting review:", error)
    //alert("Error submitting review", error)
  }
    
  }
  const [ReviewDa, setReviewData] = useState([])

  



  return (
    <section className="py-20 px-4 bg-gray-50">
      <div
        data-aos="fade-up"
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8"
      >
        <h2
          data-aos="fade-down"
          className="text-2xl font-semibold text-center mb-6"
        >
          Leave a Review
        </h2>

        {/* ✅ onSubmit added here */}
        <form onSubmit={handleSubmit} className="space-y-5" >
          
          {/* Name */}
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            required
            placeholder="Your Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          {/* Rating */}
          <div data-aos="zoom-in" className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <Star
                  size={30}
                  className={`transition ${
                    star <= (hover || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Comment */}
          <textarea
            rows={4}
            required
            placeholder="Write your feedback..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />

          {/* ✅ Button WITHOUT onClick */}
          <button
            type="submit"
            data-aos="fade-up"
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Submit Review
          </button>

        </form>
      </div>
    </section>
  )
}

export default Review
