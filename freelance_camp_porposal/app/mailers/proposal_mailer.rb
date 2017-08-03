class ProposalMailer < ApplicationMailer
	def email(proposal)
		@proposal = proposal
		mail(to: @proposal.client_email, subject: "you've received a new proposal")
	end
end
