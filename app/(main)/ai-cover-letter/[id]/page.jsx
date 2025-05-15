import React from 'react'

const CoverLetter = async ({ params }) => {

    const id = await params.id
    return (
        <div>
            cover letter : {id}
        </div>
    )
}

export default CoverLetter
