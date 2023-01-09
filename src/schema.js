import z from 'zod'

const phoneRegEx = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/

const detailsSchema = z.object({
   mxp_vertical_industry: z.string({ message: "please select an option" }),
   firstname: z.string().min(2, { message: "Must be 2 or more characters long" }),
   lastname: z.string().min(2, { message: "Must be 2 or more characters long" }),
   phone: z.string().regex(phoneRegEx, { message: "Invalide phone" }),
   company: z.string(2, { message: "Must be 2 or more characters long" }),
   email: z.string().email({ message: "Invalid email address" })
})
const importsSchema = z.object({
   import_entries_per_year: z.number().int({ message: 'must be a whole number' }).positive({ message: 'must be a number greater than zero' }),
   avg_num_po_changes: z.number().int({ message: 'must be a whole number' }).positive({ message: 'must be a number greater than zero' }),
   avg_cost_per_hour: z.number().int({ message: 'must be a whole number' }).positive({ message: 'must be a number greater than zero' }),
   current_system: z.string().min(2, { message: "Must be 2 or more characters long" })

})

export const validateDetails = (detailsFormData) => {
   let result

   try {
      const result = detailsSchema.parse(detailsFormData)
      console.log('SUCCESS')
      return { valid: true, data: result }


   } catch (err) {
      console.log('ERROR')
      return { valid: false, data: err.flatten() }
   }
}

export const validateImports = (importsFormData) => {
   let result

   try {
      const result = importsSchema.parse(importsFormData)
      console.log('SUCCESS')
      return { valid: true, data: result }


   } catch (err) {
      console.log('ERROR')
      return { valid: false, data: err.flatten() }
   }
}