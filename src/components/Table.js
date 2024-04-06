import React from 'react'

export default function Table() {
    return (
        <div>
            <table className="table-auto w-full text-center">
                <thead className=' h-10 bg-gray-500 text-white border'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>PhoneNo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=' h-10 bg-gray-400 text-white border'>
                        <td>1</td>
                        <td>Priyanshi</td>
                        <td>priyanshi@gamil.com</td>
                        <td>Surat</td>
                        <td>7992145263</td>
                    </tr>
                    <tr className=' h-10 bg-gray-400 text-white border'>
                        <td>2</td>
                        <td>neha</td>
                        <td>nehahi@gamil.com</td>
                        <td>Hariyana</td>
                        <td>9921452635</td>
                    </tr>
                    <tr className=' h-10 bg-gray-400 text-white border'>
                        <td>3</td>
                        <td>mahek</td>
                        <td>italiya@gmail.com</td>
                        <td>Surat</td>
                        <td>9921456635</td> 
                    </tr>
                    <tr className=' h-10 bg-gray-400 text-white border'>
                        <td>4</td>
                        <td>Haresh</td>
                        <td>haresh@gmail.com</td>
                        <td>Panjab</td>
                        <td>8921456635</td> 
                    </tr>
                    <tr className=' h-10 bg-gray-400 text-white border'>
                        <td>5</td>
                        <td>jinal</td>
                        <td>jinal@gmail.com</td>
                        <td>Delhi</td>
                        <td>8921456635</td> 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



