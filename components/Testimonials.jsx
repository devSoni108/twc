const Testimonials = () => {
    return (
        <div className="px-4 sm:px-16 py-4 bg-stone-300" id="testimonials">
            <div>
                <h2 className="text-2xl font-semibold">Client Testimonails</h2>
            </div>
            <div className="sm:flex justify-between">
                <div className="p-4">
                    <p className="text-sm text-stone-700 bg-white max-w-370 p-2">The team at GTC is efficient and a dream to work with!</p>
                        <div>
                            <span className="font-semibold">Peter Smith</span>
                        </div>
                        <div>
                            <span className="text-sm text-stone-700">CEO - Agri Grow</span>
                        </div>
                </div>
                <div className="p-4">
                    <p className="text-sm text-stone-700 bg-white max-w-370 p-2">Quality and affordability is the service level at GTC Africa.</p>
                    <div>
                        <span className="font-semibold">Johan vd Merwe</span>
                    </div>
                    <div>
                        <span className="text-sm text-stone-700">Engineering Lead - Mine Sa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials