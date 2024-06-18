import { testimonials } from "../constants";

const Testimonials = () => {
	return (
		<div className="mt-20 tracking-wide">
			<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
				What people are saying?
			</h2>
			<div className="flex flex-wrap justify-center">
				{testimonials.map((testimonial, index) => (
					<div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-10 py-10">
						<div className="bg-neutral-900 rounded-md text-md border border-neutral-800 font-thin p-5">
							<p>{testimonial.text}</p>
							<div className="flex mt-8 item-start">
								<img
									className="w-12 h-12 mr-6 rounded-full border border-neutral-00"
									src={testimonial.image}
								/>
								<div>
									<h6>{testimonial.user}</h6>
									<span className="text-sm font-normal italic text-neutral-600">
										{testimonial.company}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
