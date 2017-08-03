
10.times do |proposal|
	Proposal.create!(
		customer: "Customer #{proposal}",
		portfolio_url: 'http://google.com',
		tools: "ruby on rails, angular",
		estimated_hours: (10 + proposal),
		hourly_rate: 100,
		weeks_to_complete: 12,
		client_email: "string.com",
	)
end
