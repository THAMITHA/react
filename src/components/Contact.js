const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2 bg-gray-100 rounded-lg" placeholder="message"/>
                <button>Submit</button>
            </form>
            <input/>
        </div>
    )
}

export default Contact;