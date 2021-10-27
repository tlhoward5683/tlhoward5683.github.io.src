import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

const Skills = () => {
    const skillsets = [
        {category: "Programming/Scripting Languages", list: "Java, JavaScript, Ajax, C++, PL/SQL, Perl, PHP, XML, CGI, shell (C, Bourne, Korn) scripting, HTML"},
        {category: "Libraries/Interfaces", list: "jQuery, MFC, STL, APIs, OIDs, wxWidgets"},
        {category: "Databases", list: "MS SQL Server, Oracle, MySQL, Microsoft Access"},
        {category: "Operating Systems", list: "Windows, Windows Server 2000/2003, Linux, Solaris"},
        {category: "Source Control Tools", list: "Git, SVN, CVS, MKS Source Integrity"},
        {category: "IDEs", list: "IntelliJ IDEA, Microsoft Visual Studio, Eclipse"},
        {category: "Frameworks", list: "React, Struts"},
        {category: "ORMs", list: "Hibernate, Torque"},
        {category: "Methodologies", list: "Agile, Waterfall"}
    ]

    const renderSkillset = (skillset, index) => {
        return(
            <tr key={index}>
                <td className="tableCol1">{skillset.category}</td>
                <td className="tableCol2">{skillset.list}</td>
            </tr>
        )
    }

    return (
        <div className="container">
            <h1 className="text-center page-header">
                Skills
            </h1>

            <ReactBootStrap.Table>
                <tbody>
                    {skillsets.map(renderSkillset)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}
export default Skills;