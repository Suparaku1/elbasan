"use client"

import { useState } from "react"
import { Star, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Review {
  id: string
  userName: string
  rating: number
  comment: string
  date: string
}

interface ReviewSystemProps {
  pointId: string
}

export function ReviewSystem({ pointId }: ReviewSystemProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 0,
    comment: ""
  })
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newReview.rating === 0 || !newReview.userName.trim()) return

    const review: Review = {
      id: Date.now().toString(),
      userName: newReview.userName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toLocaleDateString('sq-AL')
    }

    setReviews([review, ...reviews])
    setNewReview({ userName: "", rating: 0, comment: "" })
    setShowForm(false)
  }

  return (
    <section className="border-t pt-8">
      <h3 className="text-2xl font-bold mb-6">Vlerësimet e Vizitorëve</h3>
      
      <div className="space-y-6">
        {/* Review Form */}
        {showForm ? (
          <form onSubmit={handleSubmit} className="p-6 border rounded-lg bg-card space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Emri</label>
              <input
                type="text"
                value={newReview.userName}
                onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
                className="w-full p-2 border rounded-md"
                placeholder="Shkruani emrin tuaj"
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Vlerësimi</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                    className="text-2xl focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= newReview.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Komenti</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                className="w-full p-2 border rounded-md h-24"
                placeholder="Shkruani komentin tuaj..."
              />
            </div>
            
            <div className="flex gap-2">
              <Button type="submit">Posto Vlerësimin</Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Anulo
              </Button>
            </div>
          </form>
        ) : (
          <Button onClick={() => setShowForm(true)}>
            Shkruaj një Vlerësim
          </Button>
        )}

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{review.userName}</div>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>Akoma nuk ka vlerësime. Bëhu i pari që vlerëson!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}