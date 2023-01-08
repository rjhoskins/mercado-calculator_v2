<script>
    // your script goes here

    import SaveMore from "./SaveMore.svelte";
</script>
<section id="faq" class="relative w-full text-center">

    <div class="z-10 w-full p-4 mx-auto space-y-6 leading-7 text-left max-w-mercado-max sm:p-4 md:p-6 lg:p-16 ">
        <h2 class="mb-20 text-2xl font-bold text-left" >Frequently <br>
            asked questions.</h2>

    <ul class="space-y-6 leading-7 md:space-y-0 faqz md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-16">
        <li class="col-span-1 row-span-1 space-y-6 leading-7">
            <h6 class="font-bold">How is Mercado different from other supply chain software?</h6>
            <p>As a system of engagement, Mercado integrates with your system of record (such as your ERP) to trigger an order and feed valuable information back into your business. So all your teams and partners can access real-time information from a single source of truth.</p>
            <p>Unlike many other point-solutions on the market, Mercado is an end-to-end cloud-based platform that connects importers to the people who make and move their products.</p>
        </li>
        <li class="space-y-6 leading-7 !md:mt-0">
            <h6 class="font-bold">What are typical savings with Mercado?</h6>
            <p>Mercado offers multiple value levers across your supply chain operations. This ROI calculator provides a snapshot of your potential savings, focused on just two of the levers through cost savings and increased efficiency in creating, changing, and managing your POs with your suppliers. With these two value propositions alone, company's can typically save 40-50 percent of processing cost.</p>
            <p>But that's not all. Mercado also adds value and cost reduction with air and ocean freight spend, customs clearance fees, carrying costs and increase sales. </p>
            
        </li>
        <li class="col-span-1 row-span-1 space-y-6 leading-7">
            <h6 class="font-bold">What about the other systems I use?</h6>
            <p>We recognize that you likely already use a suite of other tools and platforms to manage your supply chain. That's why we built the Mercado Marketplace, offering pre-built and bespoke integrations with your current tech stack — from your ERP, to your forwarder’s platform, to your WMS, TMS, and everything in between — so all your data stays in-sync across your business.</p>
        </li>
        <li>
            <SaveMore />
        </li>
        
        

    </ul>

    </div>
</section>