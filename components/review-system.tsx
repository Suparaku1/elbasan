"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Star, User } from "lucide-react"

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
}

export function ReviewSystem({ pointId }: { pointId: string }) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem(`reviews-${pointId}`)
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews))
    } else {
      // Add some dummy reviews if none exist
      setReviews([
        {
          id: "1",
          name: "Esmerald Suparaku",
          rating: 5,
          comment: "Vend i mrekullueshëm, plot histori!",
          date: new Date().toLocaleDateString("sq-AL"),
        },
      ])
    }
  }, [pointId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name || "Anonim",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toLocaleDateString("sq-AL"),
    }

    const updatedReviews = [review, ...reviews]
    setReviews(updatedReviews)
    localStorage.setItem(`reviews-${pointId}`, JSON.stringify(updatedReviews))

    // Reset form
    setNewReview({ name: "", rating: 5, comment: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-8">
      <div className="bg-card border rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Lini një vlerësim</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">Emri</label>
              <input
                type="text"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Emri juaj"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vlerësimi</label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
              >
                <option value="5">⭐⭐⭐⭐⭐ (Shkëlqyer)</option>
                <option value="4">⭐⭐⭐⭐ (Shumë mirë)</option>
                <option value="3">⭐⭐⭐ (Mirë)</option>
                <option value="2">⭐⭐ (Mesatar)</option>
                <option value="1">⭐ (Dobët)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Komenti</label>
            <textarea
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
              placeholder="Shkruani eksperiencën tuaj..."
              maxLength={250}
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            />
            <div className="text-xs text-muted-foreground text-right mt-1">{newReview.comment.length}/250</div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 disabled:opacity-50"
          >
            {isSubmitting ? "Duke dërguar..." : "Dërgo Vlerësimin"}
          </button>
        </form>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Vlerësimet e Vizitorëve ({reviews.length})</h3>
        <div className="grid gap-4">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4 bg-background">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground/80">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
