import z from 'zod'

const phoneRegEx = new RegExp('^\\(? ([0 - 9]{ 3}) \\)?[-.\\s]?([0 - 9]{ 3 })[-.\\s] ? ([0 - 9]{ 4 })$')

const detailsSchema = z.object({
   mxp_vertical_industry: z.string({ message: "please select an option" }),
   firstname: z.string().min(2, { message: "Must be 2 or more characters long" }),
   lastname: z.string().min(2, { message: "Must be 5 or more characters long" }),
   phone: z.string().regex(phoneRegEx),
   company: z.string(2, { message: "Must be 2 or more characters long" }),
   email: z.string().email({ message: "Invalid email address" })
})

export const validateDetails = (detailsFormData) => {

   try {
      const result = detailsSchema.parse(detailsFormData)
      console.log('SUCCESS')
      console.log(result);

   } catch (err) {
      console.log('ERROR')
      console.log(err.flatten());
   }
}