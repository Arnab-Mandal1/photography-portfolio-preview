
const ContactForm = () => {
    return (
        <form className="max-w-xl mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-teal-800 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name"
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500 focus:ring-teal-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-teal-800 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email"
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500 focus:ring-teal-500"/>
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-teal-800 text-sm font-bold mb-2">Message</label>
                <textarea id="message" rows={4}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500 focus:ring-teal-500"></textarea>
            </div>
            <div className="text-center">
                <button type="submit"
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
