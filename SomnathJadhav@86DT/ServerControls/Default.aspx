<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
        .auto-style7 {
            width: 226px;
            height: 95px;
        }
        .auto-style9 {
            height: 95px;
        }
        .auto-style17 {
            width: 226px;
            height: 47px;
        }
        .auto-style20 {
            height: 47px;
        }
        .auto-style21 {
            width: 169px;
            height: 47px;
        }
        .auto-style22 {
            width: 169px;
            height: 95px;
        }
        .auto-style25 {
            width: 172px;
            height: 47px;
        }
        .auto-style26 {
            width: 172px;
            height: 95px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:Label ID="Label11" runat="server" Text="TextBox Control " Font-Bold="True"></asp:Label>
        <br />
        <br />
&nbsp;
        <asp:Label ID="Label12" runat="server" Text="Label">Enter Your Name : </asp:Label>

        &nbsp;&nbsp;

        <asp:TextBox ID="TextBox1" runat="server" Height="24px" ToolTip="Enter Your Name" Width="233px"></asp:TextBox>

        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
    
    </div>
        <table class="auto-style1">
            <tr>
                <td class="auto-style17">
                    <asp:Label ID="Label7" runat="server" Text="List Controls" Font-Bold="True"></asp:Label>
                </td>
                <td class="auto-style21"></td>
                <td class="auto-style21"></td>
                <td class="auto-style25"></td>
                <td class="auto-style20"></td>
            </tr>
            <tr>
                <td class="auto-style7">
                    <asp:CheckBoxList ID="CheckBoxList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="CheckBoxList1_SelectedIndexChanged">
                        <asp:ListItem>C++</asp:ListItem>
                        <asp:ListItem>Java</asp:ListItem>
                        <asp:ListItem>Linux</asp:ListItem>
                        <asp:ListItem>Python</asp:ListItem>
                    </asp:CheckBoxList>
                    <br />
                    <asp:Label ID="Label3" runat="server" Text="Selected - "></asp:Label>
&nbsp;</td>
                <td class="auto-style22">
                    <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
                        <asp:ListItem>CPP</asp:ListItem>
                        <asp:ListItem>Python</asp:ListItem>
                        <asp:ListItem>Java</asp:ListItem>
                        <asp:ListItem>Linux</asp:ListItem>
                    </asp:DropDownList>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <asp:Label ID="Label4" runat="server" Text="Selected - "></asp:Label>
                </td>
                <td class="auto-style22">
                    <asp:ListBox ID="ListBox1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ListBox1_SelectedIndexChanged">
                        <asp:ListItem>C++</asp:ListItem>
                        <asp:ListItem>Java</asp:ListItem>
                        <asp:ListItem>Python</asp:ListItem>
                        <asp:ListItem>Linux</asp:ListItem>
                        <asp:ListItem></asp:ListItem>
                    </asp:ListBox>
                    <br />
                    <br />
                    <br />
                    <asp:Label ID="Label5" runat="server" Text="Selected - "></asp:Label>
                </td>
                <td class="auto-style26">
                    <asp:RadioButtonList ID="RadioButtonList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="RadioButtonList1_SelectedIndexChanged">
                        <asp:ListItem>C++</asp:ListItem>
                        <asp:ListItem>Python</asp:ListItem>
                        <asp:ListItem>Java</asp:ListItem>
                        <asp:ListItem>Linux</asp:ListItem>
                    </asp:RadioButtonList>
                    <br />
                    <asp:Label ID="Label6" runat="server" Text="Selected - "></asp:Label>
                </td>
                <td class="auto-style9"></td>
            </tr>
        </table>
        <p>
            <asp:Label ID="Label8" runat="server" Text="Calender Control " Font-Bold="True"></asp:Label>
        </p>
        <p>
            <asp:Calendar ID="Calendar1" runat="server" Height="233px" Width="381px"></asp:Calendar>
        </p>
        <p>
            <asp:Label ID="Label9" runat="server" Text="Image Button Control" Font-Bold="True"></asp:Label>
        </p>
        <p>
            <asp:ImageButton ID="ImageButton1" runat="server" Height="156px" ImageUrl="~/Img/google.jpeg" Width="383px" />
        </p>
        <p>
            <asp:Label ID="Label10" runat="server" Text="Link Button Control - " Font-Bold="True"></asp:Label>
&nbsp;
            <asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click" PostBackUrl="https://www.google.com/">Goggle.com</asp:LinkButton>
        </p>
        <p>
            &nbsp;</p>
    </form>
    <p>
        &nbsp;</p>
</body>
</html>
